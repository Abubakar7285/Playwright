pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

environment{
    CI='true'
}
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-org/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Publish Reports'){
            steps{
                junit 'results.xml'
                archiveArtifacts artifacts:'playwright-report/**',fingerprint:true
            }
        }
    }

    post {
        always{
            echo 'Pipeline finished'
        }
        success{
            echo 'Test Passed'
        }
        failure{
            echo 'Test Failed'
        }
    }
}