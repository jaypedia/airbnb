package codesquad.airbnb.member.web.dto;

import codesquad.airbnb.member.domain.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

@Getter
public class MemberDetailResponse {

    private Long memberId;
    private String memberName;
    private String gitHubId;

    @Builder(access = AccessLevel.PRIVATE)
    private MemberDetailResponse(Long memberId, String memberName, String gitHubId) {
        this.memberId = memberId;
        this.memberName = memberName;
        this.gitHubId = gitHubId;
    }

    public static MemberDetailResponse create(Member member) {
        return MemberDetailResponse.builder()
                .memberId(member.getId())
                .memberName(member.getName())
                .gitHubId(member.getGitHubId())
                .build();
    }
}
