class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :img_url
      t.string :post_body
      t.string :board_id
      t.string :user_id

      t.timestamps
    end
  end
end
