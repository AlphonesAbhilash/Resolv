package com.resolv.backend.controller;

import com.resolv.backend.model.Issue;
import com.resolv.backend.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = "http://localhost:5173")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @PostMapping
    public String createIssue(@RequestBody Issue issue) throws ExecutionException, InterruptedException {
        return issueService.createIssue(issue);
    }

    @GetMapping
    public List<Issue> getAllIssues() throws ExecutionException, InterruptedException {
        return issueService.getAllIssues();
    }
}
