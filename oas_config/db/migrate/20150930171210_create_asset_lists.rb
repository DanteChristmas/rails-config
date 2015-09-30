class CreateAssetLists < ActiveRecord::Migration
  def change
    create_table :asset_lists do |t|
      t.string :version
      t.string :url
      t.datetime :script_created
      t.datetime :script_last_modified

      t.timestamps null: false
    end
  end
end
