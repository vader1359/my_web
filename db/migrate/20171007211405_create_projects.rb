class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :logo
      t.string :title
      t.text :description
      t.string :showcase_img

      t.timestamps
    end
  end
end
