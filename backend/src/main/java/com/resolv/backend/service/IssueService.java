package com.resolv.backend.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import com.resolv.backend.model.Issue;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class IssueService {

    public String createIssue(Issue issue) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference docRef = dbFirestore.collection("issues").document();
        issue.setId(docRef.getId());
        ApiFuture<WriteResult> collectionsApiFuture = docRef.set(issue);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public List<Issue> getAllIssues() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection("issues").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<Issue> issues = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            issues.add(document.toObject(Issue.class));
        }
        return issues;
    }
}
