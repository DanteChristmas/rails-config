module Api
  class AmpConfigsController < Api::BaseApiController

    def amp_config_params
      params.require(:amp_config).permit(:name, :org_type, :org_code, :api_key, :endpoint_url)
    end
  end
end
