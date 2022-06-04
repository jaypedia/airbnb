package codesquad.airbnb.member.repository;

import codesquad.airbnb.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByName(String name);
    Optional<Member> findByGitHubId(String gitHubId);
}
