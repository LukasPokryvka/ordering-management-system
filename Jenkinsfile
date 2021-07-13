pipeline {
  agent any
    
  stages {
         
    stage('Build and move to Apache folder') {
      steps {
        sh 'sudo /root/./fe-admin-pipeline.sh'
      }
    }
  }
}