package com.noriton.demo.controller;

import com.noriton.demo.model.Post;
import com.noriton.demo.model.request.PostCreationRequest;
import com.noriton.demo.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {





    private final PostService postService;

    @GetMapping("/post")
    public ResponseEntity readPosts(){
        return ResponseEntity.ok(postService.readPosts());
    }

    @GetMapping("/post/{id}")
    public ResponseEntity readPostsById(@PathVariable Long id){
        return ResponseEntity.ok(postService.readPostsById(id));
    }

    @DeleteMapping("/post/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        postService.delete(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/post")
    public ResponseEntity<Post> createPost(@RequestBody PostCreationRequest request){
        return ResponseEntity.ok(postService.save(request));
    }

    @PatchMapping("/post/{id}")
    public ResponseEntity<Post> updatePost(@RequestBody PostCreationRequest request, @PathVariable Long id){
        return ResponseEntity.ok(postService.update(id, request));
    }
}
