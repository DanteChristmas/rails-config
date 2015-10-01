class AccountsController < ApiController
  def index
    @result = Account.all params
    render json: @result.to_json
  end

  def show
    @account = Account.find_by_org_code params[:id]

    if params[:dev_assets]
      @result = {
        account: @account,
        assets: @account.asset_lists.map{|i| i.assets}
      }
    else
      @result = {
        account: @account,
        assets: @account.asset_lists
      }
    end
    render json: @result.to_json
  end
end
