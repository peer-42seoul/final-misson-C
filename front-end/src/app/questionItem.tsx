import type questionItemElement from "./questionItemElement";
import QuestionItemContent from "./questionItemContent";
import styles from "./page.module.css";
import QuestionInfo from "./questionInfo";

// Item에 대한 내용물을 요청해서 가져오는 컴포넌트 만드는 게 마음이 편할듯

const QuestionItem: React.FC<{ item: questionItemElement; sort: string }> = (
  props
) => (
  <div className={styles.questionItem}>
    <QuestionInfo
      title={props.item.title}
      recommend={props.item.recommend}
      view={props.item.view}
      createdAt={props.item.createdAt}
      sort={props.sort}
      nickname={props.item.nickname}
    />
    <QuestionItemContent id={props.item.questionId} />
    <i className={styles.category}>#{props.item.category}</i>
  </div>
);

export default QuestionItem;