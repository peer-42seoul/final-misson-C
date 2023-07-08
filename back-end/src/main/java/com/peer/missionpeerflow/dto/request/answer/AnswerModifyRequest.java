package com.peer.missionpeerflow.dto.request.answer;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AnswerModifyRequest {

    @NotNull(message = "질문 번호를 입력해주세요.")
    private Long questionId;
    @NotBlank(message = "닉네임을 입력해주세요.")
    private String nickname;
    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String password;
    @NotBlank(message = "내용을 입력해주세요.")
    private String content;
    @NotNull(message = "업데이트일을 입력해주세요.")
    private LocalDateTime updatedAt;

    @Builder
    public AnswerModifyRequest(String nickname, String password,  String content, Long questionId, LocalDateTime updatedAt)
    {
        this.nickname = nickname;
        this.password = password;
        this.questionId = questionId;
        this.content = content;
        this.updatedAt = updatedAt;
    }
}