package codesquad.airbnb.member.repository;

import codesquad.airbnb.member.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Optional<Member> findById(Long id) {
        Member findMember = em.find(Member.class, id);
        return Optional.ofNullable(findMember);
    }

    public Optional<Member> findByGitHubId(String githubId) {
        String jpql = "SELECT m From Member as m Where m.gitHubId = :githubId";

        return em.createQuery(jpql, Member.class)
                .setParameter("githubId", githubId)
                .getResultList()
                .stream()
                .findAny();
    }
}
