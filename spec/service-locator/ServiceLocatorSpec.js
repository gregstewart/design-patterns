describe('ServiceLocator', function () {
    'use strict';

    var serviceLocator,
        testService = {
            func: function () {
            }
        };

    beforeEach(function () {
        serviceLocator = new ServiceLocator();
        serviceLocator.reset();
    });

    describe('#register(name, service)', function () {

        it('registers a service with the service locator', function () {
            expect(function () {
                serviceLocator.register('testService', testService);
            }).not.toThrow();
        });

        it('does not allow you to register the same service twice', function () {
            var name = 'testService';
            var expected = new Error('Service \'' + name + '\' already registered');
            serviceLocator.register(name, testService);

            expect(function () {
                serviceLocator.register('testService', testService);
            }).toThrow(expected);
        });

        it('requires a valid name to register a service', function () {
            var expected = new Error('You must provide a valid name for this service');

            expect(function () {
                serviceLocator.register(undefined, testService);
            }).toThrow(expected);
            expect(function () {
                serviceLocator.register(null, testService);
            }).toThrow(expected);
            expect(function () {
                serviceLocator.register('', testService);
            }).toThrow(expected);
        });
    });

    describe('#resolve(name)', function () {
        beforeEach(function () {
            serviceLocator.register('testService', testService);
        });

        it('returns the service by name', function () {
            var service = serviceLocator.resolve('testService');

            expect(service).toBe(testService);
        });

        it('throws an exception when the requested service cannot be found', function () {
            var name = 'unknown';
            var expected = new Error('Service \'' + name + '\' not found');

            expect(function () {
                serviceLocator.resolve(name);
            }).toThrow(expected);
        });
    });

    describe('#destroy(name)', function () {
        beforeEach(function () {
            serviceLocator.register('testService', testService);
        });

        it('destroys a registered service', function () {
            var name = 'testService',
                service = serviceLocator.resolve(name),
                expected = new Error('Service \'' + name + '\' not found');

            expect(service).toBe(testService);

            serviceLocator.destroy(name);

            expect(function () {
                serviceLocator.resolve(name);
            }).toThrow(expected);
        });

        it('does nothing when trying to destroy a service that is not registered', function () {
            expect(function () {
                serviceLocator.destroy('someService');
            }).not.toThrow();
        });
    });
});
