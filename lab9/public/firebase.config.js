// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyCdbZFrUl7IZ6qzYy4pK8g3qIKRMKJQPeg",
  authDomain: "phoon2547-9102c.firebaseapp.com",
  projectId: "phoon2547-9102c",
  storageBucket: "phoon2547-9102c.firebasestorage.app",
  messagingSenderId: "187783690772",
  appId: "1:187783690772:web:6491e68147be8ed4c70501",
  measurementId: "G-QMDTQT83JC"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}