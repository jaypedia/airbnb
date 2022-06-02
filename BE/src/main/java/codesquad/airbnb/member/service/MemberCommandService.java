package codesquad.airbnb.member.service;

import codesquad.airbnb.exception.DuplicateGitHubIdException;
import codesquad.airbnb.exception.DuplicateMemberNameException;
import codesquad.airbnb.member.domain.Member;
import codesquad.airbnb.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MemberCommandService {

    private final MemberRepository memberRepository;

    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        log.info("join Member = {}", member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        validateDuplicateMemberName(member.getName());
        validateDuplicateGitHubId(member.getGitHubId());
    }

    private void validateDuplicateMemberName(String memberName) {
        memberRepository.findByName(memberName)
                .ifPresent(duplicateMember -> {
                    throw new DuplicateMemberNameException();
                });
    }

    private void validateDuplicateGitHubId(String gitHubId) {
        memberRepository.findByGitHubId(gitHubId)
                .ifPresent(duplicateMember -> {
                    throw new DuplicateGitHubIdException();
                });
    }

}
