package com.noriton.demo.service;

import com.noriton.demo.model.Member;
import com.noriton.demo.model.Post;
import com.noriton.demo.model.request.MemberCreationRequest;
import com.noriton.demo.model.request.PostCreationRequest;
import com.noriton.demo.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member save(MemberCreationRequest request){
        Member memberToCreate = new Member();
        BeanUtils.copyProperties(request, memberToCreate);
        return memberRepository.save(memberToCreate);
    }

    public List<Member> readMembers(){
        return memberRepository.findAll();
    }

    public Member readMember(Long id){
        Optional<Member> member = memberRepository.findById(id);
        if(member.isPresent()){
            return member.get();
        }
        throw new EntityNotFoundException("Cant find any member under given ID");
    }

    public void deleteMember(Long id){
        memberRepository.deleteById(id);
    }

    public Member update(Long id, MemberCreationRequest request){
        Optional<Member> result = memberRepository.findById(id);
        if(!result.isPresent()){
            throw new EntityNotFoundException("Member is not present in the database");
        }

        Member member = result.get();
        member.setName(request.getName());
        member.setIsLogined(request.getIsLogined());
        member.setPosts(request.getPosts());

        return memberRepository.save(member);
    }
}
