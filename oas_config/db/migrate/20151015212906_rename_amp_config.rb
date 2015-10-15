class RenameAmpConfig < ActiveRecord::Migration
  def change
    rename_table :amp_config, :amp_configs
  end
end
