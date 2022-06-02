package codesquad.airbnb.member.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member")
@ToString(of = {"id", "gitHubId", "name"})
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name = "github_id", unique = true)
    private String gitHubId;

    @Column(name = "name", unique = true)
    private String name;

    @Builder(access = AccessLevel.PUBLIC)
    private Member(String gitHubId, String name) {
        this.gitHubId = gitHubId;
        this.name = name;
    }

}
