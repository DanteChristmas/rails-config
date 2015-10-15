class CreateAmpConfigTable < ActiveRecord::Migration
  def change
    create_table :amp_config do |t|
      t.string :name
      t.string :org_type
      t.string :org_code
      t.string :api_key
      t.string :endpoint_url


      t.timestamps null: false
    end
  end
end
