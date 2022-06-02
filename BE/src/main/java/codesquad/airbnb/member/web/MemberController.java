package codesquad.airbnb.member.web;

import codesquad.airbnb.member.domain.Member;
import codesquad.airbnb.member.service.MemberCommandService;
import codesquad.airbnb.member.service.MemberQueryService;
import codesquad.airbnb.member.web.dto.MemberDetailResponse;
import codesquad.airbnb.member.web.dto.MemberJoinRequest;
import codesquad.airbnb.member.web.dto.MemberJoinResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private final MemberCommandService memberCommandService;
    private final MemberQueryService memberQueryService;

    @PostMapping
    public MemberJoinResponse joinMember(@RequestBody MemberJoinRequest memberJoinRequest) {
        log.info("Member Join Request = {}", memberJoinRequest);
        Member member = memberJoinRequest.toEntity();
        Long memberId = memberCommandService.join(member);

        return new MemberJoinResponse(memberId);
    }

    @GetMapping("/{id}")
    public MemberDetailResponse memberDetail(@PathVariable Long id) {
        Member findMember = memberQueryService.findById(id);
        return MemberDetailResponse.create(findMember);
    }

}
