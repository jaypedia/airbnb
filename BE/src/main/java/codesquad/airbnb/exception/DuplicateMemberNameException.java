package codesquad.airbnb.exception;

public class DuplicateMemberNameException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "중복되는 회원명이 존재합니다.";

    public DuplicateMemberNameException() {
        super(EXCEPTION_MESSAGE);
    }
}
