package com.resolv.backend.config;

@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void init() {
        try {
            String projectId = System.getenv("FIREBASE_PROJECT_ID");
            String clientEmail = System.getenv("FIREBASE_CLIENT_EMAIL");
            String privateKey = System.getenv("FIREBASE_PRIVATE_KEY")
                    .replace("\\n", "\n");

            String firebaseJson = "{"
                    + "\"type\": \"service_account\","
                    + "\"project_id\": \"" + projectId + "\","
                    + "\"private_key\": \"" + privateKey + "\","
                    + "\"client_email\": \"" + clientEmail + "\""
                    + "}";

            InputStream serviceAccount = new ByteArrayInputStream(firebaseJson.getBytes(StandardCharsets.UTF_8));

            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();

            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
            }

        } catch (Exception e) {
            throw new RuntimeException("Firebase initialization failed", e);
        }
    }
}
