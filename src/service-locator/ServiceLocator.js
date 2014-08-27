function ServiceLocator() {
    'use strict';

    var services = {};

    function isString(value) {
        return typeof value === 'string';
    }

    return {
        register: function (name, service) {
            if(!isString(name) || name === '') {
                throw new Error('You must provide a valid name for this service');
            }

            if (services[name]) {
                throw new Error('Service \'' + name + '\' already registered');
            }

            services[name] = service;
        },
        resolve: function (name) {
            if(!services[name]) {
                throw new Error('Service \'' + name + '\' not found');
            }

            return services[name];
        },
        destroy: function (name) {
            delete services[name];
        },
        reset: function () {
            services = {};
        }
    };
};
