package codesquad.airbnb.member.web.dto;

import lombok.Getter;

@Getter
public class MemberJoinResponse {

    private Long memberId;

    public MemberJoinResponse(Long memberId) {
        this.memberId = memberId;
    }
}
