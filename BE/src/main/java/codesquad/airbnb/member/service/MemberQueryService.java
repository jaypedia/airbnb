package codesquad.airbnb.member.service;

import codesquad.airbnb.exception.MemberNotFoundException;
import codesquad.airbnb.member.domain.Member;
import codesquad.airbnb.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberQueryService {

    private final MemberRepository memberRepository;

    public Member findById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new MemberNotFoundException());
    }

}
