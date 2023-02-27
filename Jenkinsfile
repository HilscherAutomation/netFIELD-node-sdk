def BRANCHES_TO_STORE_DEPENDENCY = env.BRANCHES_TO_STORE_DEPENDENCY

pipeline {
    agent none
    environment {
        committer = "${env.CHANGE_AUTHOR_DISPLAY_NAME}"
    }
    options {
        lock resource: 'node-sdk'
    }
    stages {       
        stage('NPM Procedures') {
            agent {
                docker {
                    image 'node:14.15.1'
                    label 'linux'
                }
            }
            stages {
                stage('NPM Install') {
                    steps {
                        echo '------------------------------------------------------------------------------------------------'
                        echo "The commit is made by ${env.committer}"
                        echo 'Performing npm install...'
                        sh 'npm install'
                    }
                }
                stage('RUN Tests') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('Build Project') {
                    steps {
                        sh 'npm run build'
                    }
                }
                stage('Store Dependencies'){
                    when {
                        expression {
                            BRANCHES_TO_STORE_DEPENDENCY.contains(env.GIT_BRANCH)
                        }
                    }

                    steps{
                        withCredentials([usernameColonPassword(credentialsId: 'SCMReader', variable: 'SCMReader')]) {
                        dir("dependencyStorage")
                        {
                            git branch: 'master',
                            credentialsId: 'SCMReader',
                            url: 'https://bitbucket.hilscher.com/scm/ncvtasks/dependency-storage.git'
                        }
                        }
                        echo "------------------------------------------------------------------------------------------------"
                        sh 'npm i webpack ajv@^6.9.1 acorn'
                        sh 'pwd'
                        sh 'cd ./dependencyStorage && yarn'
                        sh 'node ./dependencyStorage/getDependencies.js --packageManager npm --project edgeportal-sdk --branch ' + env.GIT_BRANCH
                    }
                } 
            }
        }
    }
    post {
        always {
            node ('linux') {
                echo 'Cleaning up field'
                deleteDir()
            }
        }
    }
}

