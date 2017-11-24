/**
 * Created by synus on 24/11/17.
 */
import sortBy from 'lodash';
import {users} from './users';
import {User} from './User';
import './user.scss';

var sortedUsers = sortBy(users, 'name')
    .map(function(user) {
        return new User(user.name, user.age);
    });

document.querySelector('.container').innerHTML = buildHTML();

function buildHTML() {
    var html = '';
    sortedUsers.forEach(user => {
        html = '<p class="user">${user.display}</p>';
    });
    return html;
}