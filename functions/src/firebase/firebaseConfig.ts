import { getAuth } from 'firebase/auth'
import { initializeApp, getApps } from 'firebase/app'
import { config } from '../index'

const firebaseConfig = {
  apiKey: config.fb_project_config.firebase_api_key,
  authDomain: config.fb_project_config.firebase_auth_domain,
  projectId: config.fb_project_config.firebase_project_id,
  storageBucket: config.fb_project_config.firebase_storage_bucket,
  messagingSenderId: config.fb_project_config.firebaee_messaging_sender_id,
  appId: config.fb_project_config.firebase_app_id,
  measurementId: config.fb_project_config.firebase_mesuarement_id,
  databaseUrl: config.fb_project_config.firebase_database_url,
}
console.log(process.env.FIREBASE_API_KEY)

const apps = getApps()

const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0]

export const auth = getAuth(firebaseApp)
