package com.noriton.demo.controller;

import com.noriton.demo.model.Member;
import com.noriton.demo.model.request.MemberCreationRequest;
import com.noriton.demo.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MemberController {

    private final MemberService memberService;
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/member")
    public ResponseEntity readMembers(){
        return ResponseEntity.ok(memberService.readMembers());
    }

    @GetMapping("/member/{id}")
    public ResponseEntity<Member> readMember(@PathVariable Long id){
        return ResponseEntity.ok(memberService.readMember(id));
    }

    @PostMapping("/member")
    public ResponseEntity<Member> createMember(@RequestBody MemberCreationRequest request){
        return ResponseEntity.ok(memberService.save(request));
    }

    @DeleteMapping("/member/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id){
        memberService.deleteMember(id);
        return ResponseEntity.ok().build();
    }
}
