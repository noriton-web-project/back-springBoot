package com.noriton.demo.service;

import com.noriton.demo.model.Member;
import com.noriton.demo.model.Post;
import com.noriton.demo.model.request.MemberCreationRequest;
import com.noriton.demo.model.request.PostCreationRequest;
import com.noriton.demo.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Transactional
    public Member save(MemberCreationRequest request){
        Member memberToCreate = new Member();
        BeanUtils.copyProperties(request, memberToCreate);
        return memberRepository.save(memberToCreate);
    }

    @Transactional
    public List<Member> readMembers(){
        return memberRepository.findAll();
    }

    @Transactional
    public Member readMember(Long id){
        Optional<Member> member = memberRepository.findById(id);
        if(member.isPresent()){
            return member.get();
        }
        throw new EntityNotFoundException("Cant find any member under given ID");
    }

    @Transactional
    public void deleteMember(Long id){
        memberRepository.deleteById(id);
    }

    @Transactional
    public Member update(Long id, MemberCreationRequest request){
        Optional<Member> result = memberRepository.findById(id);
        if(!result.isPresent()){
            throw new EntityNotFoundException("Post is not present in the database");
        }

        Member member = new Member();
        member.setName(request.getName());
        member.setIsLogined(request.getIsLogined());
        member.setPosts(result.get().getPosts());

        return memberRepository.save(member);
    }
}
