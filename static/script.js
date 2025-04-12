// static/script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const studentIdInput = document.getElementById("studentId");
  const studentNameInput = document.getElementById("studentName");

  const resultBox = document.getElementById("result");
  const googleIdSpan = document.getElementById("googleId");
  const googlePwSpan = document.getElementById("googlePw");

  // 🔹 테스트용 더미 데이터
  const dummyData = [
    {
      studentId: "20230101",
      studentName: "김철수",
      googleId: "20230101@school.edu",
      googlePw: "qwer1234!"
    },
    {
      studentId: "20230102",
      studentName: "이영희",
      googleId: "20230102@school.edu",
      googlePw: "abcd5678!"
    },
    {
      studentId: "20230103",
      studentName: "박민수",
      googleId: "20230103@school.edu",
      googlePw: "zxcv7890!"
    }
  ];

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 기본 폼 제출 방지

    const enteredId = studentIdInput.value.trim();
    const enteredName = studentNameInput.value.trim();

    const found = dummyData.find(
      (student) =>
        student.studentId === enteredId && student.studentName === enteredName
    );

    if (found) {
      googleIdSpan.textContent = found.googleId;
      googlePwSpan.textContent = found.googlePw;
      resultBox.style.display = "block";
    } else {
      googleIdSpan.textContent = "-";
      googlePwSpan.textContent = "-";
      resultBox.style.display = "block";
      alert("일치하는 학생 정보를 찾을 수 없습니다.");
    }
  });
});
