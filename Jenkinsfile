pipeline {
  agent {
    dockerfile {
            filename 'Dockerfile'
        }
    }
  
  
  stages {
    stage('run spec file') {
      steps {
        sh 'npm ci'
        sh 'npx cypress run --spec "cypress/e2e/specs/"'
      }
    }
  }
  post{
    always{
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: "cypress/reports", reportFiles: 'TurboMobileE2EReport.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
  }
}
