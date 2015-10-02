class AccountsController < ApiController
  def index
    @result = Account.all
    render json: @result.to_json
  end

  def show
    begin
      @account = Account.find_by_org_code params[:id]
      @result = {
        config: @account,
        assets: @account.get_assets
      }
      render json: @result.to_json
    rescue
      not_found
    end
  end

  def create
    @account = Account.new account_params
    @account.save

    render json: @account.to_json
  end

  def update
    @account = Account.find params[:id]
    @account.update_attributes account_params
    @account.save

    render json: @account.to_json
  end

  def account_params
    params.require(:account).permit(:org_code, :api_key, :google_analytics_key, :google_search_key, :dfp_path_prefix, :ooyala_ad_set_codes, :ooyala_video_player_id, :ooyala_audio_player_id, :platform_name, :copyright, :publication_name, :amp_endpoint_url)
  end
end
