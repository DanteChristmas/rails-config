class AddTicketsLinkAndMediaBylineToAccounts < ActiveRecord::Migration
  def change
    change_table "accounts" do |t|
      t.string :default_tickets_link
      t.string :media_byline
    end
  end
end
