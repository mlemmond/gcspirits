
import Vue from 'vue';
import { Component } from 'av-ts';

@Component
export default class NavMenuComponent extends Vue {

    collapseNav(event) {
        // now we have access to the native event
        console.log('in collapseNav');
        console.log(event.target.tagName);
    }
}