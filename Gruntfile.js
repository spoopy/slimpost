module.exports = function (grunt) {

    grunt.initConfig({     
        clean: {
            sass: [".sass-cache", "assets/css/style.css"],
            js: ["src/js/main.js", "assets/js/main.min.js"]
        },
        compass: {
            build: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'assets/css',
                    environment: 'production'
                }    
            }
        },
        autoprefixer: {
            options: {    
                browsers: ['last 2 version']      
            },
            build: {
                src: 'assets/css/style.css'
            },
        },
        concat: {
            options: {
                separator: ';',
            },
            build: {
                src: ['src/js/**/*.js'],
                dest: 'src/js/main.js'
            }
        },
        uglify: {
            build: {
                src: 'src/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        },
        watch: {
            sass: {
                files: 'src/scss/**/*.scss',
                tasks: ['clean:sass', 'compass', 'autoprefixer'],            
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: ['clean:js', 'concat', 'uglify'],            
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');    

    grunt.registerTask('default', ['clean:sass', 'clean:js', 'compass', 'autoprefixer', 'concat', 'uglify']);
}