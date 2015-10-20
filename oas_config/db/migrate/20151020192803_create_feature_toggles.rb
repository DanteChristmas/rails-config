class CreateFeatureToggles < ActiveRecord::Migration
  def change
    create_table :feature_toggles do |t|
      t.boolean :robots
      t.boolean :paywall
      t.boolean :sitemap
      t.integer :account_id

      t.timestamps null: false
    end
  end
end
