package codesquad.airbnb.member.web.dto;

import codesquad.airbnb.member.domain.Member;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"gitHubId", "name"})
public class MemberJoinRequest {

    private String gitHubId;
    private String name;

    @Builder(access = AccessLevel.PUBLIC)
    private MemberJoinRequest(String gitHubId, String name) {
        this.gitHubId = gitHubId;
        this.name = name;
    }

    public Member toEntity() {
        return Member.builder()
                .gitHubId(gitHubId)
                .name(name)
                .build();
    }

}
