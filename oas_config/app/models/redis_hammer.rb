class RedisHammer
  attr_accessor :connection
  def initialize
    @connection = Redis.new url: Rails.configuration.redis_url
  end

  def self.smash(options={})
    if options[:account].present? && options[:model].present?
      if options[:id]

      else

      end
    else
      raise(ArgumentError, "You need both an account and model to smash caches")
    end
  end

  def self.smash_all(organization)
    if organization.present?
      @namespace = Redis::Namespace.new organization.to_sym, redis: @connection
      @namespace.keys.each do |k|
        @namespace.send('del', k)
      end
      "smash all for #{organization} success"
    else
      raise(ArgumentError, "You need to specify an organization code to smash the cache.")
    end
  end

  def self.instance
    @instance ||= RedisHammer.new
  end
end
