package com.noriton.demo.service;

import com.noriton.demo.model.Member;
import com.noriton.demo.model.Post;
import com.noriton.demo.model.request.MemberCreationRequest;
import com.noriton.demo.model.request.PostCreationRequest;
import com.noriton.demo.repository.MemberRepository;
import com.noriton.demo.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;


    @Autowired
    public PostService(PostRepository postRepository,
                       MemberRepository memberRepository, MemberService memberService) {
        this.postRepository = postRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
    }

    @Transactional
    public Post save(PostCreationRequest post){
        Post postToCreate = new Post();
        BeanUtils.copyProperties(post, postToCreate);
        LocalDateTime dateTime = LocalDateTime.now();
        postToCreate.setDateTime(dateTime);

        Optional<Member> member = memberRepository.findById(post.getId());
        if(member.isPresent()){
//            Member m = member.get();
//            MemberCreationRequest request = new MemberCreationRequest();
//            request.setName(m.getName());
//            request.setIsLogined(m.getIsLogined());
//            request.setPosts(m.getPosts());
//            request.setId(m.getId());
//            Member result = memberService.update(m.getId(), request);
            postToCreate.setMember(member.get());

        }
        else{
            throw new EntityNotFoundException("Member is not found in the database");
        }
        return postRepository.save(postToCreate);
    }

    @Transactional
    public Post update(Long id, PostCreationRequest request){
        Optional<Post> result = postRepository.findById(id);
        if(!result.isPresent()){
            throw new EntityNotFoundException("Post is not present in the database");
        }

        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        LocalDateTime dateTime = LocalDateTime.now();
        post.setDateTime(dateTime);

        Optional<Member> member = memberRepository.findById(request.getId());
        if(member.isPresent()){
//            Member m = member.get();
//            MemberCreationRequest memberRequest = new MemberCreationRequest();
//            memberRequest.setName(m.getName());
//            memberRequest.setIsLogined(m.getIsLogined());
//            memberRequest.setPosts(m.getPosts());
//            memberRequest.setId(m.getId());
//            Member updatedMember = memberService.update(m.getId(), memberRequest);
            post.setMember(member.get());
        }
        else{
            throw new EntityNotFoundException("Member is not found in the database");
        }
        return postRepository.save(post);
    }

    @Transactional
    public List<Post> readPosts(){
        return postRepository.findAll();
    }

    @Transactional
    public void delete(Long id) {
        postRepository.deleteById(id);
    }

    @Transactional
    public List<Post> readPostsById(Long id){
        return postRepository.findByMemberId(id);
    }
}
