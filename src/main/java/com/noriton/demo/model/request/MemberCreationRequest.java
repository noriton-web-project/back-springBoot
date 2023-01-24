package com.noriton.demo.model.request;

import com.noriton.demo.model.Post;
import lombok.Data;

import java.util.List;

@Data
public class MemberCreationRequest {
    private Long id;
    private String name;
    private Boolean isLogined;
    private List<Post> posts;
}
