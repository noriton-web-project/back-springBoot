package com.noriton.demo.model.request;

import com.noriton.demo.model.Member;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostCreationRequest {
    private String title;
    private String content;
    private Long id;
}
