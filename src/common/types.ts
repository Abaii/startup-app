export interface Posts {
  user_id: number;
  idea_description: string;
  target_audience: string;
  post_author: string;
  external_link: string;
  long_text: string;
  pronoun: string;
  category: string;
  tags: string[];
}

export type PartialPost = Pick<
  Posts,
  'user_id' | 'idea_description' | 'post_author' | 'long_text' | 'category'
>;

export type PostCategory = Pick<Posts, 'category'>;
