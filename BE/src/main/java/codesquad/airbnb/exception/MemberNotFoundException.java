package codesquad.airbnb.exception;

public class MemberNotFoundException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "조건에 부합하는 회원을 찾지 못 했습니다.";

    public MemberNotFoundException() {
        super(EXCEPTION_MESSAGE);
    }
}
