class AddAmpConfigIdToAccount < ActiveRecord::Migration
  def change
    add_column :accounts, :amp_config_id, :integer
  end
end
