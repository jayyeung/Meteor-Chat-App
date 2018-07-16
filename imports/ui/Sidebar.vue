<template>
	<div class='c-sidebar'>
		<Searchbar class='u-ph-24 u-pv-20' v-model='searchFilter'/>

		<div class='c-sidebar__list-status u-ph-24'>{{ listStatus }}</div>

		<ul class='c-sidebar__list'>
			<transition-group name='slide'>
				<li v-for='(user, i) in filterUsers'
					class='c-sidebar__list-item' @click='setTarget(user.username)'
					:key='`contact-${i}`'>

					<Avatar class='u-mr-20' :src='user.avatar'/>
					<div>
						<span>{{ user.username }}</span>

						<transition-group name='slide' tag='div' class='u-mv-8'>
							<Label v-if='currentUser.username === user.username'
							small class='u-color-attacker-light' style='line-height:0;'
							key='label-1'>You</Label>

							<Label v-else-if='userTarget && userTarget.username === user.username'
							small class='u-color-victim' style='line-height:0;'
							key='label-2'>Target</Label>

							<Label v-else
							small class='disguise-label u-color-grey' style='line-height:0;'
							key='label-3'>Disguise as target</Label>
						</transition-group>
					</div>
				</li>
			</transition-group>

			<li v-show='!filterUsers.length'
			class='c-sidebar__list-item c-sidebar__list-item--empty'>
				<img class='u-mb-20' src='/assets/user-anon.svg' width='160'/>
				No Users Found
			</li>

			<li class='u-pv-32'></li>
		</ul>
	</div>
</template>

<script>
	import Label from './objects/Label.vue';
	import Searchbar from './objects/Searchbar.vue';
	import Avatar from './objects/Avatar.vue';

	import MeteorData from './store/data';

	export default {
		components: {
			Searchbar,
			Avatar,
			Label
		},
		data: function() {
			return {
				searchFilter: ''
			}
		},
		methods: {
			setTarget: function(username) {
				this.$store.dispatch("setTarget", username);
			},

			sortUsers: function(users) {
				if (users.length <= 0) return;
				const user = this.currentUser.username;

				// we want user to be on top
				users.sort((u1, u2) => {
					u1 = u1.username;
					u2 = u2.username;
					return (u1 === user) ? -1 : ((u2 === user) ? 1 : 0);
				});
			},
		},
		computed: {
			filterUsers: function() {
				let users = this.users;
				this.sortUsers(users);

				const filter = (this.searchFilter).trim().toLowerCase();
				if (filter === '') return users;
				users = (this.users).filter((obj, i) => {
					const username = obj.username.toLowerCase();
					return (username.indexOf(filter) !== -1);
				});
				return users;
			},

			listStatus: function() {
				let status = 'found';
				const contactsNum = (this.filterUsers).length;
				if (contactsNum === (this.users).length)
					status = 'online';

				return `${contactsNum} user${(contactsNum !== 1) ? 's' : ''} ${status}`;
			}
		},
		...MeteorData
	};
</script>

<style lang='scss' scoped>
.c-sidebar__list-item {
	.disguise-label {
		transition: all 0.2s;
		opacity: 0;
	}
	&:hover .disguise-label { opacity: 1; }
}
</style>

