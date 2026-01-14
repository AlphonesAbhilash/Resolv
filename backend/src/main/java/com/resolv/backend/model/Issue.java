package com.resolv.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Issue {
    private String id;
    private String title;
    private String description;
    private List<String> tags;
    private String status; // "Open", "In Progress", "Solved"
    private int upvotes;
    private String githubUrl;
    private String createdBy;
}
