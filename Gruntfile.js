// Generated on 2015-02-15 using generator-react 0.0.2
'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        react: {
            app: {
                options: {
                    extension: 'jsx',
                    ignoreMTime: false
                },
                files: {
                    'app/scripts': 'app/jsx'
                }
            },
        },
        compass: {
            compile: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            react: {
                files: ['app/jsx/*.jsx'],
                tasks: ['react:app']
            },
            compass: {
                files: ['app/sass/*.scss'],
                tasks: ['compass:compile', 'copy']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/*.html',
                    'app/styles/*.css',
                    'app/scripts/*.js',
                    'app/images/*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['app']
                }
            },
            test: {
                options: {
                    base: [
                        'test',
                        'app'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: 'dist',
                    livereload: false
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['dist/*']
                }]
            },
            generated: {
                files: [{
                    dot: true,
                    src: ['app/scripts/app.js']
                }]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'app/scripts/*.js',
                'test/spec/*.js',
                '!app/scripts/app.js'
            ]
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: [
                        'images/*.png',
                        'scripts/*.js',
                        'vendor/*.js',
                        'styles/*.css',
                        'index.html',
                        'manifest.json'
                    ],
                    dest: 'dist'
                }]
            }
        },
        nodeunit: {
            all: ['test/*.js'],
            options: {
                reporter: 'default'
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'compass:compile',
            'react',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'react',
        'nodeunit'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'react',
        'copy:dist'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);

};
