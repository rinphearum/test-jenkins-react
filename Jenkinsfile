// pipeline {
//   agent {
//     node {
//       label 'slave_worker'
//     }
//   }
//   environment{
//         MY_IMAGE='react-image'
//   }
//   tools {
//     nodejs 'nodejs'
//   }
//   stages {
//     stage('Build') {
//       steps {
//         sh 'docker build -t sophak12/react-web .'
//       }
//     }

//     stage('Deploy') {
//       steps {
//         sh 'docker run -d -p 3000:80 sophak12/react-web'
        
//       }
//     }
//   }
// }

// // work with agent node

// ----------------------- port allocated--------------------------
pipeline {
    agent any
    tools{
        nodejs 'node'
    }
    environment{
        MY_IMAGE='react-app'
    }
    stages {
        stage('Build') {
            steps {
                sh 'sudo docker build -t ${MY_IMAGE} .'
            }
        }
        stage('Test') {
            steps {
                echo "Testing .... dg mix teh"
            }
        }
        stage('Deploy') {
            steps {
                script{
                def existImageID= sh(script: 'sudo docker ps -aq -f name="${MY_IMAGE}"',returnStdout:true)
                    echo "ExistImageID:${existImageID}"
                    if(existImageID){
                        echo '${existImageID} is removing ...'
                        sh 'sudo docker rm -f ${MY_IMAGE}'
                    }else{
                       echo 'No existing container'
                    }
                }
                sh 'sudo docker run -d -p 3000:80 --name ${MY_IMAGE} ${MY_IMAGE}'
            }
        }
    }
}
